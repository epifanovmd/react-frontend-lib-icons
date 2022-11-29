import React, { FC, memo } from 'react';
import ResistorNodesSvg from '../svg/resistor-nodes.svg';

export interface IResistorNodesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ResistorNodesIcon: FC<IResistorNodesIconProps> = memo(props => {
  return <ResistorNodesSvg {...props} />;
});
