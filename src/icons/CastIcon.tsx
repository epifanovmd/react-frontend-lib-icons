import React, { FC, memo } from 'react';
import CastSvg from '../svg/cast.svg';

export interface ICastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastIcon: FC<ICastIconProps> = memo(props => {
  return <CastSvg {...props} />;
});
