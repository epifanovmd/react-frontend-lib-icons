import React, { FC, memo } from 'react';
import WrapDisabledSvg from '../svg/wrap-disabled.svg';

export interface IWrapDisabledIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrapDisabledIcon: FC<IWrapDisabledIconProps> = memo(props => {
  return <WrapDisabledSvg {...props} />;
});
