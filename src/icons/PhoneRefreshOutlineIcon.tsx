import React, { FC, memo } from 'react';
import PhoneRefreshOutlineSvg from '../svg/phone-refresh-outline.svg';

export interface IPhoneRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRefreshOutlineIcon: FC<IPhoneRefreshOutlineIconProps> = memo(props => {
  return <PhoneRefreshOutlineSvg {...props} />;
});
