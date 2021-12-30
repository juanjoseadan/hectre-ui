import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';

const middleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
	switch (action.type) {
		default:
			return next(action);
	}
};

export default middleware;