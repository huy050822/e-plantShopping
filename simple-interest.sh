cat <<EOF > simple-interest.sh
#!/bin/bash
# Simple Interest Calculator
echo "Enter principal amount:"
read p
echo "Enter rate of interest per year:"
read r
echo "Enter time period in years:"
read t
s=\`echo "scale=2; \$p * \$r * \$t / 100" | bc\`
echo "The simple interest is: \$s"
EOF
