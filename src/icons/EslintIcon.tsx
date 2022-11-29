import React, { FC, memo } from 'react';
import EslintSvg from '../svg/eslint.svg';

export interface IEslintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EslintIcon: FC<IEslintIconProps> = memo(props => {
  return <EslintSvg {...props} />;
});
