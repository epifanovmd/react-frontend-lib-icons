import React, { FC, memo } from 'react';
import AccountSchoolOutlineSvg from '../svg/account-school-outline.svg';

export interface IAccountSchoolOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSchoolOutlineIcon: FC<IAccountSchoolOutlineIconProps> = memo(props => {
  return <AccountSchoolOutlineSvg {...props} />;
});
