import React, { FC, memo } from 'react';
import AccountSchoolSvg from '../svg/account-school.svg';

export interface IAccountSchoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSchoolIcon: FC<IAccountSchoolIconProps> = memo(props => {
  return <AccountSchoolSvg {...props} />;
});
