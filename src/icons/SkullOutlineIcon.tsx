import React, { FC, memo } from 'react';
import SkullOutlineSvg from '../svg/skull-outline.svg';

export interface ISkullOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkullOutlineIcon: FC<ISkullOutlineIconProps> = memo(props => {
  return <SkullOutlineSvg {...props} />;
});
