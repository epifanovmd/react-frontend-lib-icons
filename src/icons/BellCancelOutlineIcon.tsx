import React, { FC, memo } from 'react';
import BellCancelOutlineSvg from '../svg/bell-cancel-outline.svg';

export interface IBellCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCancelOutlineIcon: FC<IBellCancelOutlineIconProps> = memo(props => {
  return <BellCancelOutlineSvg {...props} />;
});
