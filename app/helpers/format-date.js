import { helper } from '@ember/component/helper';

export default helper(function formatDate(params/*, hash*/) {
	return params;
	//return moment(params[0]).format('YYYY-MM-DD');
});
