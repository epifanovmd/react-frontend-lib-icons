import React, { FC, memo } from 'react';
import SalesforceSvg from '../svg/salesforce.svg';

export interface ISalesforceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SalesforceIcon: FC<ISalesforceIconProps> = memo(props => {
  return <SalesforceSvg {...props} />;
});
