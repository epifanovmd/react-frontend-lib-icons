import React, { FC, memo } from 'react';
import CardAccountDetailsSvg from '../svg/card-account-details.svg';

export interface ICardAccountDetailsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountDetailsIcon: FC<ICardAccountDetailsIconProps> = memo(props => {
  return <CardAccountDetailsSvg {...props} />;
});
