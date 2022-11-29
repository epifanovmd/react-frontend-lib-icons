import React, { FC, memo } from 'react';
import CardAccountDetailsOutlineSvg from '../svg/card-account-details-outline.svg';

export interface ICardAccountDetailsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountDetailsOutlineIcon: FC<ICardAccountDetailsOutlineIconProps> = memo(props => {
  return <CardAccountDetailsOutlineSvg {...props} />;
});
