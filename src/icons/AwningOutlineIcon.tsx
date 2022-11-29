import React, { FC, memo } from 'react';
import AwningOutlineSvg from '../svg/awning-outline.svg';

export interface IAwningOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AwningOutlineIcon: FC<IAwningOutlineIconProps> = memo(props => {
  return <AwningOutlineSvg {...props} />;
});
