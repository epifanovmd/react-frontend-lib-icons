import React, { FC, memo } from 'react';
import UmbracoSvg from '../svg/umbraco.svg';

export interface IUmbracoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbracoIcon: FC<IUmbracoIconProps> = memo(props => {
  return <UmbracoSvg {...props} />;
});
