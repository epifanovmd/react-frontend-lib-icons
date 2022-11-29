import React, { FC, memo } from 'react';
import PhoneRefreshSvg from '../svg/phone-refresh.svg';

export interface IPhoneRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRefreshIcon: FC<IPhoneRefreshIconProps> = memo(props => {
  return <PhoneRefreshSvg {...props} />;
});
