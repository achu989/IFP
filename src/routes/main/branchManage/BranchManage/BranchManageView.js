import React, { Component, PropTypes } from 'react'
import { Row, Col, Button } from 'antd'
import NProgress from 'nprogress'
import BranchTree from 'COMPONENT/BranchTree'
import InputSearch from 'COMPONENT/InputSearch'
import BranchSearch from '../BranchSearch'
import BranchScan from '../BranchScan'

export default class BranchManageView extends Component {

  constructor(props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
  } 

  componentWillMount() {
    // 初始化银行机构列表
    NProgress.start()
    this.props.initBranchList(() => {
      NProgress.done()
      this.setState({
        loaded: true
      })
    })
  }

  onSearch(keyword) {
    this.props.changeBranchSelected({
      brhId: '',
      brhName: keyword
    })
  }

  componentWillUnmount() {
    NProgress.done()
  }

  render() {
    const { changeBranchSelected, branchList } = this.props

    return (
      <div className="pageBranchManage">
        <Row>
          <Col span={5}>
            <div className="app-left-side">
              <InputSearch
                placeholder='请输入搜索机构名称'
                initialValue=''
                onSearch={this.onSearch}
              />
              <BranchTree
                selected={changeBranchSelected}
                branchList={branchList}
              />
            </div>
          </Col>
          <Col span={19}>
            <BranchSearch/>
            <BranchScan/>
          </Col>
        </Row>
      </div>
    )
  }

}