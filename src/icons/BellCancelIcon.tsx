import React, { FC, memo } from 'react';
import BellCancelSvg from '../svg/bell-cancel.svg';

export interface IBellCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCancelIcon: FC<IBellCancelIconProps> = memo(props => {
  return <BellCancelSvg {...props} />;
});
