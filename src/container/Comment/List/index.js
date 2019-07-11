import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Loading from '@/components/Loading';
import { COMMENT_LIST, REPLY_LIST } from '@/graphql/schema/comment';
import { useQuery, useMutation } from '@/hooks/graphql';
import { getTimeAgo } from '@/utils/common';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Item from './Item';
import useStyles from './styles';

function DynamicList({ session }) {
  const classes = useStyles();
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(COMMENT_LIST, { session });
  const fetchMoreReplys = useMutation(REPLY_LIST);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list, meta } = data;

  console.log('list');
  console.log(list);

  return (
    <Fragment>
      <Box my={2} display="flex" alignItems="center">
        <Typography variant="body1" gutterBottom>全部评论</Typography>
        <Box mx={1} />
        <Typography variant="body2" gutterBottom>{meta.count}</Typography>
      </Box>
      <Box>
        {list.map((i, idx) => (
          <Fragment key={i._id}>
            {idx !== 0 && <Divider variant="inset" />}
            <Box my={4}>
              <Item
                data={i}
                session={session}
                commentTo={i._id}
              />
              {i.replys && i.replys.length > 0 && (
                <Box ml={9} p={4} pb={3} className={classes.replay}>
                  {i.replys.map((j, jdx) => (
                    <Fragment key={j._id}>
                      {jdx !== 0 && (
                        <Box my={3}>
                          <Divider variant="inset" />
                        </Box>
                      )}
                      <Item
                        data={j}
                        session={session}
                        commentTo={i._id}
                      />
                    </Fragment>
                  ))}
                  {i.replys.length < i.replyCount && (
                  <Button
                    fullWidth
                    onClick={() => {
                      fetchMoreReplys({ commentTo: i._id, skip: i.replys.length }, {
                        update: (store, { data: { list: _list } }) => {
                          const _data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
                          const jdx = _data.list.findIndex(j => j._id === i._id);
                          if (jdx === -1) return;
                          _data.list[jdx].replys = [ ..._data.list[jdx].replys, ..._list ];
                          store.writeQuery({ query: COMMENT_LIST, variables: { session }, data: _data });
                        },
                      });
                    }}
                  >
                    查看更多回复 - 剩余
                    {i.replyCount - i.replys.length}
                    条
                  </Button>
                  )}
                </Box>
              )}
            </Box>
          </Fragment>
        ))}

        {list.length < meta.commentCount && (
          <Button
            fullWidth
            onClick={loadMore}
            disabled={isLoadingMore}
          >
            查看更多回复 - 剩余
            {meta.commentCount - list.length}
            条
          </Button>
        )}
      </Box>
    </Fragment>
  );
}


export default DynamicList;
