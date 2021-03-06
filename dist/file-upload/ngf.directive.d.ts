import { EventEmitter, ElementRef } from '@angular/core';
import { InvalidFileItem } from "./fileTools";
export interface dragMeta {
    type: string;
    kind: string;
}
export declare class ngf {
    element: ElementRef;
    fileElm: any;
    filters: {
        name: string;
        fn: (file: File) => boolean;
    }[];
    lastFileCount: number;
    multiple: string;
    accept: string;
    maxSize: number;
    ngfFixOrientation: boolean;
    fileDropDisabled: boolean;
    selectable: boolean;
    directiveInit: EventEmitter<ngf>;
    lastInvalids: InvalidFileItem[];
    lastInvalidsChange: EventEmitter<{
        file: File;
        type: string;
    }[]>;
    lastBaseUrl: string;
    lastBaseUrlChange: EventEmitter<string>;
    file: File;
    fileChange: EventEmitter<File>;
    files: File[];
    filesChange: EventEmitter<File[]>;
    constructor(element: ElementRef);
    initFilters(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    paramFileElm(): any;
    enableSelecting(): void;
    getValidFiles(files: File[]): File[];
    getInvalidFiles(files: File[]): InvalidFileItem[];
    handleFiles(files: File[]): void;
    que(files: File[]): void;
    changeFn(event: any): void;
    clickHandler(evt: any): boolean;
    beforeSelect(): void;
    isEmptyAfterSelection(): boolean;
    eventToTransfer(event: any): any;
    stopEvent(event: any): any;
    transferHasFiles(transfer: any): any;
    eventToFiles(event: Event): any;
    applyExifRotations(files: File[]): Promise<File[]>;
    onChange(event: Event): void;
    getFileFilterFailName(file: File): string | undefined;
    isFileValid(file: File): boolean;
    isFilesValid(files: File[]): boolean;
    protected _acceptFilter(item: File): boolean;
    protected _fileSizeFilter(item: File): boolean;
    filesToWriteableObject(files: File[]): dragMeta[];
}
