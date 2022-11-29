import React, { FC, memo } from 'react';
import GraphqlSvg from '../svg/graphql.svg';

export interface IGraphqlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GraphqlIcon: FC<IGraphqlIconProps> = memo(props => {
  return <GraphqlSvg {...props} />;
});
