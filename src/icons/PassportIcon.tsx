import React, { FC, memo } from 'react';
import PassportSvg from '../svg/passport.svg';

export interface IPassportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PassportIcon: FC<IPassportIconProps> = memo(props => {
  return <PassportSvg {...props} />;
});
