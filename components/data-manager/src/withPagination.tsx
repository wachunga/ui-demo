import React, { Component, ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface PaginationProps {
  pagination: {
    currentPage: number;
    onPageChange: (page: string | number) => any;
  };
}

declare type RouteProps = RouteComponentProps<{}>;
function withPagination<P extends PaginationProps & RouteProps>() {
  return function withPagination(WrappedComponent: ComponentType<P>) {
    class PaginationWrapper extends Component<P> {
      onPageChange = pageNumber => {
        const page = Number(pageNumber);
        const params = new URLSearchParams(this.props.location.search);
        if (page > 1) {
          params.set('page', page.toString());
        } else {
          params.delete('page');
        }
        this.props.history.push(`${this.props.location.pathname}?${params.toString()}`);
      };

      render() {
        const params = new URLSearchParams(this.props.location.search);
        const page = Number(params.get('page')) || 1;
        return <WrappedComponent {...this.props} pagination={{ currentPage: page, onPageChange: this.onPageChange }} />;
      }
    }
    return PaginationWrapper;
  };
}
export default withPagination;
