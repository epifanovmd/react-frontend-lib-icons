import React, { FC, memo } from 'react';
import UbisoftSvg from '../svg/ubisoft.svg';

export interface IUbisoftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UbisoftIcon: FC<IUbisoftIconProps> = memo(props => {
  return <UbisoftSvg {...props} />;
});
