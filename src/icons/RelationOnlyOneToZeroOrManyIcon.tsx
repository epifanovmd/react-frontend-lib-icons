import React, { FC, memo } from 'react';
import RelationOnlyOneToZeroOrManySvg from '../svg/relation-only-one-to-zero-or-many.svg';

export interface IRelationOnlyOneToZeroOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOnlyOneToZeroOrManyIcon: FC<IRelationOnlyOneToZeroOrManyIconProps> = memo(props => {
  return <RelationOnlyOneToZeroOrManySvg {...props} />;
});
