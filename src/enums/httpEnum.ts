/**
 * @description: 与后端协定的状态 code
 */
export enum ResultEnum {
	SUCCESS = 200,
	CODE = 1,
	ERROR = 500,
	OVERDUE = 401,
	TIMEOUT = 20000,
	TYPE = 'success',
}

/**
 * @description: ContentType
 */
export enum ContentTypeEnum {
	// json
	JSON = 'application/json;charset=UTF-8',
	// text
	TEXT = 'text/plain;charset=UTF-8',
	// form-data 一般配合qs
	FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
	// form-data 上传
	FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
