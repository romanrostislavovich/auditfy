import {OptionModel} from "../models/option.model";
import {Argument, ArgumentTypes} from "conventional-cli";


const cliOptions: OptionModel[] = [
    new OptionModel({
        shortName: '-f',
        longName: '--file',
        required: true,
        type: ArgumentTypes.path,
        description: 'Path to the local HTML file to audit',
        additionalDescription: ``,
        values: [
            'relative path',
            'absolute path',
        ]
    }),
]