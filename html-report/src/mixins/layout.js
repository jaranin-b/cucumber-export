import config from '../config';
import result from '@/assets/results/restqa-result'

export default {
    data: () => {
        return {
            appConfig: config.app,
        }
    },
  methods: {
    getResult() {
      return result
    },
    decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }
};
