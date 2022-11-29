import React, { FC, memo } from 'react';
import ToolsSvg from '../svg/tools.svg';

export interface IToolsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToolsIcon: FC<IToolsIconProps> = memo(props => {
  return <ToolsSvg {...props} />;
});
