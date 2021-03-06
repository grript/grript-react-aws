import React from 'react';
import { connect } from 'react-redux';
import FormAddArticle from './FormAddArticle';
import MenuToggle from './MenuToggle';
import Counter from './Counter';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ReduxList = ({ articles }) => {
  return (
      <div className="redux-list">
          <h1 className="page-title">Learn Redux</h1>
          <h2>Add a new article</h2>
          <FormAddArticle />
          <MenuToggle />
          <Counter />
          <ul className="list-group list-group-flush">
            {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
            ))}
          </ul>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus sem a accumsan condimentum. Donec laoreet mauris sit amet velit euismod, non elementum dolor auctor. Nullam sed mi id lorem vehicula lacinia. Nunc et urna sit amet velit euismod lacinia quis aliquam urna. Pellentesque eget porta urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus massa elit, scelerisque sed metus id, mattis sagittis turpis. Maecenas sollicitudin ex et est vehicula, nec congue turpis ullamcorper. Sed congue malesuada faucibus.
          </p>
      </div>
  );
}
export default connect(mapStateToProps)(ReduxList);