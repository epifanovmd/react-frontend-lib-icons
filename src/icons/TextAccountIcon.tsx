import React, { FC, memo } from 'react';
import TextAccountSvg from '../svg/text-account.svg';

export interface ITextAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextAccountIcon: FC<ITextAccountIconProps> = memo(props => {
  return <TextAccountSvg {...props} />;
});
