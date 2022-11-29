import React, { FC, memo } from 'react';
import CreditCardSettingsSvg from '../svg/credit-card-settings.svg';

export interface ICreditCardSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardSettingsIcon: FC<ICreditCardSettingsIconProps> = memo(props => {
  return <CreditCardSettingsSvg {...props} />;
});
