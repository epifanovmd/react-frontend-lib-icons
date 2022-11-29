import React, { FC, memo } from 'react';
import BellPlusOutlineSvg from '../svg/bell-plus-outline.svg';

export interface IBellPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellPlusOutlineIcon: FC<IBellPlusOutlineIconProps> = memo(props => {
  return <BellPlusOutlineSvg {...props} />;
});
