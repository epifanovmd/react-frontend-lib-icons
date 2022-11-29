import React, { FC, memo } from 'react';
import CurlingSvg from '../svg/curling.svg';

export interface ICurlingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurlingIcon: FC<ICurlingIconProps> = memo(props => {
  return <CurlingSvg {...props} />;
});
