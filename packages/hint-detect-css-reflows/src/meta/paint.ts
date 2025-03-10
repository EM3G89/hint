import { Category } from '@hint/utils-types';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const schema = require('./hint-detect-css-reflows-schema.json');

const meta: HintMetadata = {
    docs: {
        category: Category.performance,
        description: getMessage('paint_description', 'en'),
        name: getMessage('paint_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('paint_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('paint_name', language);
    },
    id: 'hint-detect-css-reflows/paint',
    schema: [schema],
    scope: HintScope.any
};

export default meta;
