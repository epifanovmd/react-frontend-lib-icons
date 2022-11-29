import React, { FC, memo } from 'react';
import NodejsSvg from '../svg/nodejs.svg';

export interface INodejsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NodejsIcon: FC<INodejsIconProps> = memo(props => {
  return <NodejsSvg {...props} />;
});
