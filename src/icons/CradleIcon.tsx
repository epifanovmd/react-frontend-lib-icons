import React, { FC, memo } from 'react';
import CradleSvg from '../svg/cradle.svg';

export interface ICradleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CradleIcon: FC<ICradleIconProps> = memo(props => {
  return <CradleSvg {...props} />;
});
