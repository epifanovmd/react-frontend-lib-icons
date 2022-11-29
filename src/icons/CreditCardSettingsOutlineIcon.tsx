import React, { FC, memo } from 'react';
import CreditCardSettingsOutlineSvg from '../svg/credit-card-settings-outline.svg';

export interface ICreditCardSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CreditCardSettingsOutlineIcon: FC<ICreditCardSettingsOutlineIconProps> = memo(props => {
  return <CreditCardSettingsOutlineSvg {...props} />;
});
