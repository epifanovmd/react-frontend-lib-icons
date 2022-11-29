import React, { FC, memo } from 'react';
import AccountArrowRightOutlineSvg from '../svg/account-arrow-right-outline.svg';

export interface IAccountArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowRightOutlineIcon: FC<IAccountArrowRightOutlineIconProps> = memo(props => {
  return <AccountArrowRightOutlineSvg {...props} />;
});
