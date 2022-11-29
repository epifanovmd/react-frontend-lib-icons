import React, { FC, memo } from 'react';
import ToolboxSvg from '../svg/toolbox.svg';

export interface IToolboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToolboxIcon: FC<IToolboxIconProps> = memo(props => {
  return <ToolboxSvg {...props} />;
});
