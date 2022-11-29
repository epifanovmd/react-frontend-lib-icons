import React, { FC, memo } from 'react';
import WrapSvg from '../svg/wrap.svg';

export interface IWrapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrapIcon: FC<IWrapIconProps> = memo(props => {
  return <WrapSvg {...props} />;
});
