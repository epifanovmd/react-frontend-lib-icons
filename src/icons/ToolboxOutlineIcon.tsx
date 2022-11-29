import React, { FC, memo } from 'react';
import ToolboxOutlineSvg from '../svg/toolbox-outline.svg';

export interface IToolboxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToolboxOutlineIcon: FC<IToolboxOutlineIconProps> = memo(props => {
  return <ToolboxOutlineSvg {...props} />;
});
