import React, { FC, memo } from 'react';
import CancelSvg from '../svg/cancel.svg';

export interface ICancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CancelIcon: FC<ICancelIconProps> = memo(props => {
  return <CancelSvg {...props} />;
});
