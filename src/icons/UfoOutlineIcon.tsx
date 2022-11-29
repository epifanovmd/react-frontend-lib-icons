import React, { FC, memo } from 'react';
import UfoOutlineSvg from '../svg/ufo-outline.svg';

export interface IUfoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UfoOutlineIcon: FC<IUfoOutlineIconProps> = memo(props => {
  return <UfoOutlineSvg {...props} />;
});
