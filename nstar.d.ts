interface TAjaxReturn<T> {
  code: number;
  message: string;
  success: boolean;
  data: {
    records: T;
    total: string;
    current: string;
    orders: any[];
    optimizeCountSql: boolean;
    searchCount: boolean;
    maxLimit?: any
    countId?: any
    pages: string;
  };
}

type TNsAjaxMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'FORMDATA';

type TResponseType = 'document' | 'blob' | 'text' | 'json' | 'file' | 'arraybuffer';

declare class NSAJAX {
  constructor(basePath: string, timeout: number, filters?: { before?: (data: any) => any, after?: (data: any) => any });
  private headers: {[key: string]: any};
  private fetchHandler<T>(url: string, method: TNsAjaxMethod, params?: {[key: string]: any}, header?: {[key: string]: any}, responseType?: TResponseType): Promise<TAjaxReturn<T>>;
  protected setHeader(header: {[key: string]: any}): void;
  protected post<T>(url: string, params?: {[key: string]: any}, header?: {[key: string]: any}, responseType?: TResponseType): Promise<TAjaxReturn<T>>;
  protected get<T>(url: string, params?: {[key: string]: any}, header?: {[key: string]: any}, responseType?: TResponseType): Promise<TAjaxReturn<T>>;
  protected put<T>(url: string, params?: {[key: string]: any}, header?: {[key: string]: any}, responseType?: TResponseType): Promise<TAjaxReturn<T>>;
  protected delete<T>(url: string, params?: {[key: string]: any}, header?: {[key: string]: any}, responseType?: TResponseType): Promise<TAjaxReturn<T>>;
  setTimeout(timeout: number): void;
  setBasePath(path: string): void;
}

interface Window {
  NsAjax: typeof NSAJAX;
  NsFloatingbox: {
    open(boxId: string, evt: MouseEvent): void
    close(boxId: string): void
  }
}

interface HTMLElementTagNameMap {
  NsContentbox: HTMLElement;
  NsFloatingbox: HTMLElement;
 
  NsCodeide: HTMLElement;
  NsFramebox: HTMLElement;
  NsHeader: HTMLElement;
  NsSandbox: HTMLElement;
  NsTable: HTMLElement;
  NsText: HTMLElement;
}

declare function $t (path: string): string;
