import React, { Component } from 'react';
import { doFetchStories } from '../actions/story';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

const FormItem = Form.Item;

const applyQueryState = query => ({ query });

class SearchStories extends Component {
  state = {
    query: 'redux'
  };

  onChange = event => {
    const { value } = event.target;
    console.log(value);
    this.setState(applyQueryState(value));
  };

  onSubmit = event => {
    this.props.fetchStories(this.state.query);
    this.setState({ query: '' });
    event.preventDefault();
  };

  componentDidMount() {
    this.props.fetchStories(this.state.query);
  }

  render() {
    const { query } = this.state;
    return (
      <Form layout="inline" onSubmit={this.onSubmit}>
        <FormItem>
          <Input value={query} onChange={this.onChange} />
        </FormItem>
        <FormItem>
          <Button htmlType="submit">Search</Button>
        </FormItem>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  fetchStories: doFetchStories
};

const ConnectedSearchStories = connect(null, mapDispatchToProps)(SearchStories);
export default ConnectedSearchStories;
