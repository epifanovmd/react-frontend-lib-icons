import React, { FC, memo } from 'react';
import CardAccountMailOutlineSvg from '../svg/card-account-mail-outline.svg';

export interface ICardAccountMailOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountMailOutlineIcon: FC<ICardAccountMailOutlineIconProps> = memo(props => {
  return <CardAccountMailOutlineSvg {...props} />;
});
