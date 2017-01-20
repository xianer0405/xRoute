import Router from '../../route';
import 'jsLib/imgResize';
import './index.less';

class PageModel {
    constructor() {
        //this.init();
    }
    init() {
        console.log('This\'s path1 file');

        document.querySelector('.route-btn').addEventListener('click', () => {
            Router.go('path2');
        })
    }
}

module.exports = PageModel;