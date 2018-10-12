import React, { PureComponent } from 'react';
import Layout from '@/components/Layout';
import Link from '@/components/Link';
import Article from '@/view/article/list';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Link to={'/article/create'}>create</Link>
          <Article />
        </Layout>
      </div>
    );
  }
}
