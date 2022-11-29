import React, { FC, memo } from 'react';
import RelationOnlyOneToZeroOrOneSvg from '../svg/relation-only-one-to-zero-or-one.svg';

export interface IRelationOnlyOneToZeroOrOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOnlyOneToZeroOrOneIcon: FC<IRelationOnlyOneToZeroOrOneIconProps> = memo(props => {
  return <RelationOnlyOneToZeroOrOneSvg {...props} />;
});
