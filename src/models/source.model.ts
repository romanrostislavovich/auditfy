import { File } from './file.model';

export class SourceModel {
    isURL!: boolean;
    file!: File;
    url!: string;

    static create(source: string): SourceModel {
        const sourceModel= new SourceModel();
        if (source.includes('http') || source.includes('https')) {
            sourceModel.url = source;
            sourceModel.isURL = true;
        } else {
            sourceModel.file = File.create(source);
            sourceModel.isURL = false;
        }
        return sourceModel
    }
}