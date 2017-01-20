import { connect } from 'react-redux'
import { setAddBranchVisible,  branchAdd } from 'REDUCER/branchManage'
import { cleanBranch, updateBranch } from 'REDUCER/main'
import BranchAddView from './BranchAddView'

const mapDispatchToProps = {
  cleanBranch,
  updateBranch,
  setAddBranchVisible,
  branchAdd
}

const mapStateToProps = (state) => ({
  visible: state.branchManage.addBranchBoxVisible,
  branchNodes: state.main.getBranchList,
  selectBranchId: state.main.selectBranch,
  branchList: state.main.branchList
})

export default connect(mapStateToProps, mapDispatchToProps)(BranchAddView)

